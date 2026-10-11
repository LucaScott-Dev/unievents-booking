
# What to notice
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

