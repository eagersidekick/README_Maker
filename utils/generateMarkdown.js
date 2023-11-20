// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT': return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Apache License 2.0': return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License 3.0': return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 2-Clause': return `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'BSD 3-Cause': return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost 1.0': return `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero 1.0': return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public 1.0': return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
    case 'None': return '';
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT': return `[License: MIT](https://opensource.org/licenses/MIT)`;
    case 'Apache License 2.0': return `[License](https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU General Public License 3.0': return `[License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'BSD 2-Clause': return `[License](https://opensource.org/licenses/BSD-2-Clause)`;
    case 'BSD 3-Cause': return `[License](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'Boost 1.0': return `[License](https://www.boost.org/LICENSE_1_0.txt)`;
    case 'Creative Commons Zero 1.0': return `[License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case 'Eclipse Public 1.0': return `[License](https://opensource.org/licenses/EPL-1.0)`;
    case 'None': return '';
  }
};
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === "None") {
    return "";
  }

  return ( 
    `## License
  ${renderLicenseBadge(license)} <br>
  ${renderLicenseLink(license)} <br>
  Licensed with ${license}. See License documentation for more information

    `
  );
  }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  ${renderLicenseSection(data.license)}
  ## Table of Contents

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contributors}

  ## Tests
  ${data.tests}

  ## Questions
  Please contact me at ${data.email} or at my github username: ${data.username}.
`;
}

module.exports = generateMarkdown;
