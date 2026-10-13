
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

# Notice
- Dependency injection: createApp receives its dependencies, so tests plug in doubles and production code can plug in the real S2 and S3 services later without changing the endpoint.  
- Mock vs stub vs fake: the stub supplies data, the fake imitates login, and the mock lets us verify behaviour (send called exactly once).  
- Order of checks: login (401), then role (403), then event (404), then business rules (409). That order is why the tests for T-S1-07 and T-S1-08 never touch event data.  
- Known simplifications: booking references use the count of stored bookings, and npm start has no real dependencies wired yet, so POST /bookings only works in the tests for now. 
Real wiring comes when S2 and S3 exist.  

# Checkpoint
10 tests pass on main.   
History shows a Red commit followed by a Green commit for the API.  
Test names carry the portfolio IDs (T-S1-02, 04, 06, 07, 08).


## RED Tests
When a **test passes during the Red step**, ask: “What would have to be broken for this test to fail?” If the answer is “nothing”, the test is too weak.

### Some Pages and API endpoints you can open in the browser
These all work with npm start

URL	What you should see
http://localhost:3000/health	{"status":"ok"}
http://localhost:3000/events/E1	Page for Film Society Screening, 2026-11-20, with an enabled Book a place button
http://localhost:3000/events/E2	Page for Quiz Night (a full event). Clicking the button shows “This event is full”
http://localhost:3000/events/E3	Page for Careers Fair (79 of 80 places). Clicking the button succeeds
http://localhost:3000/events/E99	“Event not found” (the event doesn’t exist)
http://localhost:3000/api/events/E1	JSON with id, title, date, status, capacity: 80, booked: 10
http://localhost:3000/api/events/E2	JSON with booked: 80
http://localhost:3000/api/events/E3	JSON with booked: 79
http://localhost:3000/api/events/E99	{"error":"EVENT_NOT_FOUND"}
http://localhost:3000/event.html	The page template with “Loading…”. Its script can’t find an event ID from this URL, so it ends in an error message

## Using command line
Terminal (macOS or Linux; on Windows PowerShell use curl.exe and escape the quotes differently):
curl -i -X POST http://localhost:3000/bookings \
  -H "Content-Type: application/json" \
  -d '{"eventId":"E1"}'