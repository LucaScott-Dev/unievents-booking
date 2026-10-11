
# UniEvents Booking Service

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

