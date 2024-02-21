// In a file like global.d.ts or typings.d.ts
declare namespace JSX {
    interface IntrinsicElements {
        // Define properties for HTML elements
        div: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
        // Add more HTML elements as needed
        button: React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
    }
}
