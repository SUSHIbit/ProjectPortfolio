// resources/js/Components/ui/index.js
// This file serves as a central export point for all UI components

// Import and re-export card components
import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,
} from "./card";

// Import and re-export button component
import { Button } from "./button";

// Import and re-export input component
import { Input } from "./input";

// Import and re-export textarea component
import { Textarea } from "./textarea";

// Import and re-export label component
import { Label } from "./label";

// Import and re-export alert components
import { Alert, AlertDescription } from "./alert";

// Import and re-export badge component
import { Badge } from "./badge";

// Import and re-export checkbox component
import { Checkbox } from "./checkbox";

// Import and re-export select components
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "./select";

// Export all components
export {
    // Card components
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    CardFooter,

    // Form components
    Button,
    Input,
    Textarea,
    Label,
    Checkbox,

    // Select components
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,

    // Feedback components
    Alert,
    AlertDescription,

    // Display components
    Badge,
};
