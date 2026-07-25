# DSA Practice

Data-structures & algorithms problems, each with its own test coverage — the way an online judge validates a submission. Solutions and tests are written by hand to reinforce learning.

## Stack

- **TypeScript** — solutions and tests, no build step.
- **Vitest** — runs `.ts` directly, watch mode, coverage.
- `describe` / `it` / `expect` are globals — no need to import them in test files.

## Commands

```bash
pnpm test        # run every test once
pnpm test:watch  # re-run affected tests on save (use this while solving)
pnpm coverage    # run tests + line/branch coverage report
pnpm typecheck   # type-check without emitting
```

Target a single problem while iterating:

```bash
pnpm test:watch sliding-window-fixed-size
```

## Layout

```
advanced/<category>/<pattern>/
  1-brute-force-approach.ts        # a solution (named export)
  1-brute-force-approach.test.ts   # its colocated tests
  2-optimal-approach.ts            # next approach to the same problem
  2-optimal-approach.test.ts
```

One test file per approach, colocated beside it. Each new approach to a problem gets its own numbered file plus a matching `.test.ts`.

## Workflow for a new problem

1. Create `advanced/<category>/<pattern>/` if it doesn't exist.
2. Write the problem statement as a comment at the top of the solution file.
3. Export a named function; implement the approach.
4. Add `<name>.test.ts` beside it covering: the happy path, edge cases (empty input, single element), and the boundary the algorithm hinges on.
5. `pnpm test:watch <pattern>` until green.

See `advanced/arrays/sliding-window-fixed-size/` for a worked example.
