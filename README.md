# Yamada-UI styles issue reproduction

This repo provides a small reproduction of the issue in:

- https://github.com/yamada-ui/yamada-ui/issues/7830

Lines 12-15, and 72-91 in `packages/ui/src/components/heading/heading.stories.tsx` is the leading factor to causing broken styles.

When these lines are commented out, the themes work again.

## Setup

Install using pnpm, and run storybook.

```bash
rm -rf packages/ui/.next packages/ui/node_modules node_modules && pnpm i && pnpm -C packages/ui storybook
```

## Images

Lines commented out:

![](working.png)

Lines not commented out:

![](broken.png)
