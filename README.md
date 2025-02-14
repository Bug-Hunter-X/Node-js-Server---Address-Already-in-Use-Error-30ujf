# Node.js Server - Address Already in Use

This repository demonstrates a common error encountered when developing Node.js servers: the `EADDRINUSE` error. This error occurs when your server attempts to bind to a port that is already in use by another process.

## Reproducing the Error

1. Clone this repository.
2. Run `node bug.js`.
3. Attempt to run `node bug.js` again in a separate terminal.  You'll see the error.

## Solution

The solution involves checking if the port is available before attempting to bind to it.  The `bugSolution.js` file provides a robust solution that handles the port in use scenario gracefully.