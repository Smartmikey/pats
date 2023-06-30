
let hostname = 'api.yourpats.com/api/';
let staging_hostname = 'staging-api.yourpats.com/api/';
let dev_hostname = 'dev-api.yourpats.com/api/';
// const hostname = window.location.hostname + '/api/';

export const pollAuth = false;

export const environment = (process.env.REACT_APP_ENVIRONMENT) ? process.env.REACT_APP_ENVIRONMENT : process.env.NODE_ENV;

switch (environment) {
    case 'production':
        hostname = '//' + hostname;
        break;
    case 'staging':
        hostname = '//' + staging_hostname;
        break;
    case 'dev':
        hostname = '//' + dev_hostname;
        break;
    case 'development':
        hostname = 'http://localhost/api/';
        break;
    default:
        hostname = 'http://localhost/api/';
}

export const ApiURL = hostname;

export const colors = {
    primary: '#13D3BD',
    primaryLight: '#13D3BD14',
    secondary: '#ffd056',
    secondaryBorder: '#ffd056',
    dark: '#253444',
    white: '#ffffff',
    gray: '#f3f3f3',
    grayLight: '#F1F1F5',
    darkTransparent: '#25344480',
    textHeading:'#024357',
    textHeadingTransparent:'#024357D1',
    chip: '#FFC5C5',
    success: {
        background: '#B9F6CA',
        text: '#00C853',
        border: '#00C853'
    },
    warn: {
        background: '#FFCC80',
        text: '#FB8C00',
        border: '#FB8C00'
    },
    danger: {
        background: '#FFCDD2',
        text: '#E53935',
        border: '#E53935'
    }
};


export const HOSTURL = 'http://localhost';