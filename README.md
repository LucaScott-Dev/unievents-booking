
# UniEvents Booking Service

[![CI](https://github.com/essam-eliwa/unievents-booking/actions/workflows/ci.yml/badge.svg)](https://github.com/essam-eliwa/unievents-booking/actions/workflows/ci.yml)

Booking slice (FR-01, US-S1-01) of UniEvents, a web-based event management
system for university students and societies.

## Run locally

```bash
npm install
npm start        # http://localhost:3000/health
```

## Run the tests

```bash
npm test
```

## Tests

| ID | Level | Covers |
|----|-------|--------|
| T-S1-01, 03, 05 | Unit (BookingPolicy) | AC-S1-01.1, .2, .3 |
| T-S1-02, 04, 06, 07, 08 | API (supertest) | AC-S1-01.1 to .4 |

# Turn on branch protection

1- In your repository, go to Settings → Branches (or Settings → Rules → Rulesets).
2- Add a rule for the branch name main.
3- Tick:
   - Require a pull request before merging. If you work alone, leave the number of required approvals at 0.
   - Require status checks to pass before merging. Search for and add lint and test.

4- Save.

If you can’t find these options on a private repository: branch protection on private repos needs a paid plan (Pro or Team). You can Apply for the free GitHub Student Developer Pack, which includes Pro.



## Using command line
Terminal (macOS or Linux; on Windows PowerShell use curl.exe and escape the quotes differently):
curl -i -X POST http://localhost:3000/bookings \
  -H "Content-Type: application/json" \
  -d '{"eventId":"E1"}'
