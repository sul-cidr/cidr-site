# CIDR Website

Minor content updates can be made directly on the GitHub website, if desired, and the site can be built and deployed by anyone with commit rights by running the ["Deploy Site workflow"](https://github.com/sul-cidr/cidr-site/actions/workflows/deploy-site.yaml).


* For local development, the codebase uses `pnpm`, so make sure that's available.
* Ideally, branches will pass `pnpm lint` before being PR'd, and PRs will be reviewed before being merged.
* The site can be built and deployed from a local copy using `pnpm gh-deploy`.
