# icony

Fetch icon sets from [icony.dev](https://icony.dev) for use with [react-icomoon](https://github.com/aykutkardas/react-icomoon).

## Installation

```bash
npm install @icony-dev/icony
```

## Usage

### Fetch an icon set

```js
import Icony from "@icony-dev/icony";

const iconSet = await Icony.fetch({ collectionId: "your-collection-id" });
```

### Use with react-icomoon

```js
import Icony from "@icony-dev/icony";
import IcoMoon from "react-icomoon";

const iconSet = await Icony.fetch({ collectionId: "your-collection-id" });

const Icon = (props) => <IcoMoon iconSet={iconSet} {...props} />;

export default Icon;
```

### Pass extra query parameters

Any additional properties besides `collectionId` and `baseUrl` are appended to the request URL as query string parameters.

```js
const iconSet = await Icony.fetch({ collectionId: "your-collection-id", theme: "dark" });
// → https://icony.dev/collections/your-collection-id/selection.json?theme=dark
```

### Custom base URL

```js
const iconSet = await Icony.fetch({
  collectionId: "your-collection-id",
  baseUrl: "https://staging.icony.dev/collections",
});
```

### Get icon names

Returns an array of all icon names in the icon set.

```js
const iconSet = await Icony.fetch({ collectionId: "your-collection-id" });
const names = Icony.getIconNames(iconSet);
// → ["arrow-left", "arrow-right", "close", ...]
```

### Check if an icon exists

```js
const iconSet = await Icony.fetch({ collectionId: "your-collection-id" });

Icony.hasIcon(iconSet, "arrow-left"); // → true
Icony.hasIcon(iconSet, "unicorn");    // → false
```

## API

### `Icony.fetch(options)`

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `collectionId` | `string` | ✅ | The ID of the collection on icony.dev |
| `baseUrl` | `string` | — | Override the base URL (default: `https://icony.dev/collections`) |
| `...params` | `any` | — | Additional query string parameters |

Returns a `Promise` that resolves to the icon set JSON, compatible with `react-icomoon`.

Throws an error if:
- `collectionId` is missing
- The collection is not found or the request fails

---

### `Icony.getIconNames(iconSet)`

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `iconSet` | `object` | ✅ | The icon set returned by `Icony.fetch()` |

Returns a `string[]` of all icon names.

---

### `Icony.hasIcon(iconSet, name)`

| Param | Type | Required | Description |
|-------|------|----------|-------------|
| `iconSet` | `object` | ✅ | The icon set returned by `Icony.fetch()` |
| `name` | `string` | ✅ | The icon name to look up |

Returns `true` if the icon exists, `false` otherwise.

## License

MIT
