<p align="center">
    <a href="http://doodoo-frontend.herokuapp.com/">
        <img alt="doodoo" src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/microsoft/209/pile-of-poo_1f4a9.png"></img>
    </a>
</p>

<h3 align="center">
  DooDoo
</h3>

<p align="center">
    For when there's a shitload of work to do
</p>

<p align="center">
    <a href="https://travis-ci.org/fhhagenberg-doodoo/frontend"><img alt="Travis (.org)" src="https://img.shields.io/travis/fhhagenberg-doodoo/frontend"></a>
    <a href="https://doodoo-frontend.herokuapp.com"><img alt="Heroku" src="https://heroku-badge.herokuapp.com/?app=doodoo-frontend" /></a>
    <a href="https://deepscan.io/dashboard#view=project&tid=9591&pid=12127&bid=184219"><img src="https://deepscan.io/api/teams/9591/projects/12127/branches/184219/badge/grade.svg" alt="DeepScan grade"></a>
    <a href="https://coveralls.io/github/fhhagenberg-doodoo/frontend?branch=dev"><img src="https://coveralls.io/repos/github/fhhagenberg-doodoo/frontend/badge.svg?branch=dev" alt="Coverage Status" /></a>
    <a href=""><img alt="Depfu Status" src="https://badges.depfu.com/badges/327bf40641ea86f4a162c2e77071e699/status.svg"></img></a>
    <a href=""><img alt="Depfu Count" src="https://badges.depfu.com/badges/327bf40641ea86f4a162c2e77071e699/count.svg"></img></a>
</p>

#### Team Members

-   Alexander Stelzhammer (S1810455024)
-   Manuel Leibetseder (S1810455012)

### Introduction

doodoo is the web-based to-do app that lets you manage your tasks in an easy and comfortable way. doodoo follows the KISS principle: keep it simple, stupid: A minimalistic user interface displays your tasks (or doos) from top to bottom. All doos are grouped and sorted by due date. One of the most important aspects of keeping track of your work is to estimate time. Because of this, the time it takes for one doo to be completed can be estimated based on dumps. One dump is the average amount of time spent on the toilet during a load-off.

### Technical Background

#### Frontend

The application’s frontend is implemented entirely using React [1] and TypeScript [2]. Basic unit tests for the frontend are written using the Jest [3] framework, E2E testing is done using Cypress [4]. To ensure consistent code quality across pull requests, the CI/CD pipeline will be configured to check linting rules using ESLint [5] and apply code formatting rules via Prettier[6]. The page will be automatically deployed to Heroku [7].

#### Backend

Using Spring Boot Framework [8] in combination with Kotlin [9] and the corresponding Coroutine framework to serve the data from the database to the frontend. Spring and Kotlin can be tested via Kotlin and Spring Boot dedicated testing frameworks.

#### Database

Persisting the doo’s will be done with the help of PostgreSQL. A relational schema will be used to store the data of a user. Furthermore PostgreSQL configuration and scripts can be tested with Chef InSpec.

#### Deployment Abstraction

To abstract the deployment of the individual services, Docker will be used with Dockerfiles for each of our implementations. Dockerfiles and a Docker-Compose configuration can be tested with Chef Inspec, to maintain deployability and for the ease of use.

#### CI/CD

As no monorepo architecture is used, different CI/CD solutions will be tested for each repository.

---

[1] https://reactjs.org/
[2] https://www.typescriptlang.org/
[3] https://jestjs.io/
[4] https://www.cypress.io/
[5] https://eslint.org/
[6] https://prettier.io/
[7] https://heroku.com/
[8] https://spring.io/projects/spring-boot
[9] https://kotlinlang.org/

---

### Tools and Tutorials Used

#### Create React App

-   [https://github.com/facebook/create-react-app](https://github.com/facebook/create-react-app)

#### Test Automation and Code Coverage in JavaScript

##### Test Automation

-   [https://jestjs.io/](https://jestjs.io/)
-   [https://github.com/kulshekhar/ts-jest](https://github.com/kulshekhar/ts-jest)
-   [https://github.com/hustcc/jest-date-mock](https://github.com/hustcc/jest-date-mock)
-   [https://testing-library.com/](https://testing-library.com/)

##### Code Coverage

-   [https://coveralls.io/](https://coveralls.io/)
-   [https://medium.com/@ollelauribostr/start-measuring-coverage-with-jest-travis-ci-and-coveralls-1867928aca42](https://medium.com/@ollelauribostr/start-measuring-coverage-with-jest-travis-ci-and-coveralls-1867928aca42)
-   [https://codecov.io/](https://codecov.io/)

#### Code Quality with ESLint and DeepScan

-   [https://eslint.org/](https://eslint.org/)
-   [https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675](https://dev.to/benweiser/how-to-set-up-eslint-typescript-prettier-with-create-react-app-3675)
-   [https://deepscan.io/](https://deepscan.io/)
-   [https://deepscan.io/docs/guides/get-started/using-eslint](https://deepscan.io/docs/guides/get-started/using-eslint)

#### Automatic Dependency Updates

-   [https://depfu.com/](https://depfu.com/)

#### Deploy React App to Heroku

-   [https://devcenter.heroku.com/articles/getting-started-with-nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs)
-   [https://docs.travis-ci.com/user/deployment/heroku/](https://docs.travis-ci.com/user/deployment/heroku/)
-   [https://blog.heroku.com/deploying-react-with-zero-configuration](https://blog.heroku.com/deploying-react-with-zero-configuration)
-   [https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack)

### Lessons Learnt

#### Git Hooks for Commit Consistency

-   [https://github.com/typicode/husky](https://github.com/typicode/husky)
-   [https://dev.to/omarzi/how-to-validate-commit-message-convention-using-commitlint-and-husky-aaa](https://dev.to/omarzi/how-to-validate-commit-message-convention-using-commitlint-and-husky-aaa)
-   [https://medium.com/gits-apps-insight/utilizing-git-hook-by-using-eslint-husky-and-lint-staged-18b6f6f60f1e](https://medium.com/gits-apps-insight/utilizing-git-hook-by-using-eslint-husky-and-lint-staged-18b6f6f60f1e)
-   [https://prettier.io/docs/en/integrating-with-linters.html](https://prettier.io/docs/en/integrating-with-linters.html)

#### Mocking Child Components

-   [https://dev.to/lmeromy/testing-react-components-how-to-mock-imports-with-jest-1k90](https://dev.to/lmeromy/testing-react-components-how-to-mock-imports-with-jest-1k90)

#### GitHub Branch Protection

-   [https://help.github.com/en/github/administering-a-repository/enabling-required-status-checks](https://help.github.com/en/github/administering-a-repository/enabling-required-status-checks)

#### Decorate Your Repo

-   [https://shields.io/](https://shields.io/)

### Possible Future Improvements

#### Monitoring of Bundlesize

-   [https://github.com/siddharthkp/bundlesize](https://github.com/siddharthkp/bundlesize)

#### Lighthouse Score

-   [https://github.com/GoogleChrome/lighthouse-ci](https://github.com/GoogleChrome/lighthouse-ci)
