# NESRM-mailerlite_laod

This is the NESRM_ETL_PIPELINE mail platform loader. It uses the generic mailerlite_load as a submodule but then has CI/CD workflows and connects to the production environment

## Track Upstream Submodule Changes

```bash
cd ./vendor/mailerlite_load
git checkout main
git pull origin main
cd ../..
git add vendor/mailerlite_load
git commit -m "Update submodule to latest"
git push
```

## Initial Connection

```bash
git submodule add https://github.com/your-org/repoA.git ./vendor/someUnusedPathName
git submodule update --init --recursive
```

Whenever Repo A updates:
cd vendor/mailerlite_load
git checkout main # or whatever branch
git pull origin main
cd ../..
git add vendor/mailerlite_load
git commit -m "Update submodule to latest"
git push
