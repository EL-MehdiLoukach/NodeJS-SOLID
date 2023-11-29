// Violating ISP
class Document {
    edit(content) {
        // Edit the document
    }

    print() {
        // Print the document
    }
}

// Refactored to adhere to ISP
class EditableDocument {
    edit(content) {
        // Edit the document
    }
}

class PrintableDocument {
    print() {
        // Print the document
    }
}

class MultiFunctionDocument extends EditableDocument {
    print() {
        // Print the document
    }
}
