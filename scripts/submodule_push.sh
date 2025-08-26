#!/bin/bash
cd vendor/mailerlite_load
git add .
git commit
git push origin main
cd ../..
git add vendor/mailerlite_load
git commit -m 'Update submodule to latest'
git push origin main