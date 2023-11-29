/*
Consider an application for generating reports. 
Initially, it only supports generating HTML reports, but over time, the requirement evolves to include generating JSON and XML reports.
*/

// Violating OCP
class ReportGenerator {
    generate(reportData, format) {
        if (format === 'html') {
            // Generate HTML report
            return `<html><body>${reportData}</body></html>`;
        }
        // Adding new formats requires modifying this class
    }
}

// Refactored to adhere to OCP
class ReportGenerator {
    generate(reportData, formatter) {
        return formatter.format(reportData);
    }
}

class HtmlFormatter {
    format(data) {
        return `<html><body>${data}</body></html>`;
    }
}

class JsonFormatter {
    format(data) {
        return JSON.stringify({ content: data });
    }
}

// Adding a new format does not require modifying the existing classes
class XmlFormatter {
    format(data) {
        // XML formatting logic here
    }
}
