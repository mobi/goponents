# Contribution Guide
_**Note:** The guide for contributing to this repo is based on the [contribution guide for Angular](https://github.com/angular/angular/blob/main/CONTRIBUTING.md) itself. Parts of this guide were taken verbatim and were originally written by many [fine Angular contributors](https://github.com/angular/angular/blame/main/CONTRIBUTING.md)_

## Code of Conduct
Please read and follow our [Code of conduct](https://github.com/mobi/goponents/blob/main/CODE_OF_CONDUCT.md).

## Feature requests
You can request a new feature by submitting an issue to our [GitHub Repository](https://github.com/mobi/goponents/issues). If you would like to _implement_ a new feature, please submit an issue with a proposal for your work first. 

Our team will first make sure of the following: 
1. That we can use it. 
2. Where it fits into our current road map. 
3. What design resources and support will be needed before the feature work can begin. 

## Working Issues
Before working on an issue, you must claim it. To do so, simply comment on the issue stating that you're looking into it.
Once claimed, a contributor will modify the issue and apply the appropriate labels and milestones.

### What issues can be worked?

Any issue that does not have the `Needs Triaged` milestone can be worked.

Issues labeled as `bugs` take priority over general a `chore` or `feature`.

## Submitting a pull request (PR)
Before you submit your pull request (PR) consider the following guidelines:
1. Search [our repo](https://github.com/mobi/goponents/pulls?utf8=%E2%9C%93&q=is%3Apr) for an open or closed PR that relates to your submission.
2. Be sure that an issue describes the problem you're fixing, or documents the design for the feature you'd like to add. Discussing the design up front helps to ensure that we're ready to accept your work.
3. Fork the [mobi/goponents](https://github.com/mobi/goponents) repo.
4. Make your changes in a new git branch:
   ```bash
   git checkout -b my-branch-name dev
   ```
5. Write your code, **including appropriate test cases.**
6. Run the test as described in the [developer documentation](https://github.com/mobi/goponents#goponents), and ensure that all tests pass.
   ```bash
   ng test go-lib
   ```

7. Commit your changes using a descriptive commit message.
   ```bash
   git commit -a
   ```
8. Push your branch to GitHub:
   ```bash
   git push origin my-branch-name
   ```
9. In GitHub, send a pull request to `goponents:dev`.
  - Please format the description of your PR with our [pull request template](https://github.com/mobi/goponents/blob/main/.github/PULL_REQUEST_TEMPLATE.md)
  - If we suggest changes then:
    1. Make the required updates.
    2. Re-run the test suite to ensure tests are still passing.
    3. Rebase your branch and force push to your GitHub repository (this will update your Pull Request):
        ```
        git rebase dev -i
        git push -f
        ```

## Got a question, problem, or feedback?
Feel free to open up [an issue](https://github.com/mobi/goponents/issues/new/choose) using the appropriate template.

When any sort of issue is created, depending on the impact or urgency of the issue, one of our [contributors](https://github.com/mobi/goponents/graphs/contributors) will respond as quickly as appropriate on the issue itself. We will try to give a timeline and release schedule for any request that is made.

We would also welcome anyone to open up a [pull request]() for a bug or issue experienced in order to expedite the process.
