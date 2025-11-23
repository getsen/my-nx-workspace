# @react-demo/lib - Shared UI Components Library

A shared component library for React Micro Frontends with independent versioning.

## Version: 1.0.0

## Components

### Button
Reusable button component with multiple variants.

```tsx
import { Button } from '@react-demo/lib';

<Button 
  label="Click me" 
  variant="primary"
  onClick={() => console.log('clicked')}
/>
```

**Props:**
- `label`: string - Button text
- `onClick`: () => void - Click handler
- `variant`: 'primary' | 'secondary' | 'danger' (default: 'primary')
- `disabled`: boolean (default: false)

### Card
Container component for displaying content in a card layout.

```tsx
import { Card } from '@react-demo/lib';

<Card 
  title="My Card"
  description="This is a card"
>
  Card content here
</Card>
```

**Props:**
- `title`: string - Card title
- `description`: string - Card subtitle/description
- `children`: React.ReactNode - Card content
- `onClick`: () => void - Click handler

### Badge
Small label component for displaying status or tags.

```tsx
import { Badge } from '@react-demo/lib';

<Badge label="Success" variant="success" />
```

**Props:**
- `label`: string - Badge text
- `variant`: 'success' | 'warning' | 'error' | 'info' (default: 'info')

## Versioning

This library uses semantic versioning (semver). Update the version in `src/lib/package.json` when making changes:

- **Patch** (1.0.X): Bug fixes
- **Minor** (1.X.0): New features, backward compatible
- **Major** (X.0.0): Breaking changes

## Usage in MFEs

Import components directly from the shared lib:

```tsx
import { Button, Card, Badge } from '../../../lib/components';
```

Or import specific components:

```tsx
import { Button } from '../../../lib/components/Button';
```

## Future Enhancements

- [ ] Add more components (Modal, Input, Select, etc.)
- [ ] Add animations and transitions
- [ ] Create design system/theme
- [ ] Add Storybook documentation
- [ ] Create npm package for distribution
