# Serveur local de Sentia : remplace Live Server, sans VS Code.
# Lancé par lancer-sentia.bat. Il sert uniquement le dossier site-final,
# et seulement pour cet ordinateur (127.0.0.1). Fermer la fenêtre l'arrête.
param([int]$Port = 5500, [switch]$SansNavigateur)

$racine = [IO.Path]::GetFullPath($PSScriptRoot)
$types = @{
  '.html' = 'text/html; charset=utf-8'; '.css' = 'text/css; charset=utf-8'; '.js' = 'text/javascript; charset=utf-8'
  '.json' = 'application/json; charset=utf-8'; '.svg' = 'image/svg+xml'; '.png' = 'image/png'; '.jpg' = 'image/jpeg'
  '.woff2' = 'font/woff2'; '.woff' = 'font/woff'; '.ttf' = 'font/ttf'; '.ico' = 'image/x-icon'
}

# Premier port libre à partir de 5500 (si un autre serveur tourne déjà)
$ecoute = $null
for ($p = $Port; $p -lt $Port + 10; $p++) {
  try {
    $ecoute = New-Object System.Net.HttpListener
    $ecoute.Prefixes.Add("http://127.0.0.1:$p/")
    $ecoute.Start()
    break
  } catch { $ecoute = $null }
}
if (-not $ecoute) { Write-Host "Aucun port libre entre $Port et $($Port + 9)." -ForegroundColor Red; exit 1 }

$adresse = "http://127.0.0.1:$p/index.html"
Write-Host ""
Write-Host "  Sentia tourne sur $adresse" -ForegroundColor Cyan
Write-Host "  Fermez cette fenêtre pour arrêter le serveur."
Write-Host ""
if (-not $SansNavigateur) { Start-Process $adresse }

while ($ecoute.IsListening) {
  $ctx = $ecoute.GetContext()
  try {
    $chemin = [Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath).TrimStart('/')
    if ($chemin -eq '') { $chemin = 'index.html' }
    $fichier = [IO.Path]::GetFullPath((Join-Path $racine $chemin))
    # Refuse tout fichier hors du dossier du site (ex. « ../../ »)
    if ($fichier.StartsWith($racine, [StringComparison]::OrdinalIgnoreCase) -and (Test-Path $fichier -PathType Leaf)) {
      $octets = [IO.File]::ReadAllBytes($fichier)
      $ext = [IO.Path]::GetExtension($fichier).ToLower()
      $ctx.Response.ContentType = if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' }
      $ctx.Response.Headers.Add('Cache-Control', 'no-store')   # une modification se voit au prochain rechargement
      $ctx.Response.ContentLength64 = $octets.Length
      $ctx.Response.OutputStream.Write($octets, 0, $octets.Length)
    } else {
      $ctx.Response.StatusCode = 404
    }
  } catch {
    Write-Host "Requête interrompue : $($_.Exception.Message)" -ForegroundColor DarkGray
  } finally {
    $ctx.Response.Close()
  }
}
