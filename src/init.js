import { addFilterListener } from "./listeners/add-filter-listener.js";
import { btnListener } from "./listeners/btn-listener.js";
import { createFilterListener } from "./listeners/load-listener.js";
import { selectorListener } from "./listeners/selector-listener.js";
import { textInputListener } from "./listeners/text-input-listener.js";

createFilterListener()
btnListener('btn-submit')
addFilterListener('btn-add-filter')
addFilterListener('btn-reset')
selectorListener('selector-types')
