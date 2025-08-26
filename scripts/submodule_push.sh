#!/bin/bash
cd vendor/mailerlite_load
git add .
git commit
git push origin main
cd ../..
git add .
git commit
git push origin main