import { configure as configureDom } from '@testing-library/dom';
import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import { configure as configureReact } from '@testing-library/react';
import { setUpRouter } from './src/tests/helpers';

// speeds up *ByRole queries a bit
// https://github.com/testing-library/dom-testing-library/issues/552
configureReact({ defaultHidden: true, asyncUtilTimeout: 5000 });
configureDom({ asyncUtilTimeout: 5000 });

setUpRouter();
