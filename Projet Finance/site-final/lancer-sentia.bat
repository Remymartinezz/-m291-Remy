@echo off
rem Double-cliquez sur ce fichier pour ouvrir Sentia dans le navigateur (sans VS Code).
rem Le serveur s'arrete quand vous fermez cette fenetre.
title Sentia - serveur local
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0serveur-local.ps1"
pause
