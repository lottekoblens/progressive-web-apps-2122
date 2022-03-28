import {
    detect
} from './barcode.js';
import {
    handleRoutes
} from './router.js';
import {
    scanButton
} from './ui.js';


const init = () => {
    detect()
    // scanButton();
    // handleRoutes();
}