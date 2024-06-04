import { btnListener } from "./listeners/btn-listener.js";
import { createFilterListener } from "./listeners/load-listener.js";
import { selectorListener } from "./listeners/selector-listener.js";
import { textInputListener } from "./listeners/text-input-listener.js";

createFilterListener()
btnListener()
selectorListener('types')
