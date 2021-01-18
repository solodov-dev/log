---
title: Google recaptcha
date: sep 17, 2020
tags: [captcha, google, react]
---

Using google ReCAPTCHA in react project

```tsx
import ReCAPTCHA from 'react-google-recaptcha';

const handleReCaptcha = (token) => {
  setState({ ...stateProps, reCaptcha: token });
};

{
  window.parametrize('REACT_APP_RECAPTCHA_KEY') && (
    <ReCAPTCHA
      sitekey={window.parametrize('REACT_APP_RECAPTCHA_KEY')}
      onChange={handleReCaptcha}
      hl="ru"
    />
  );
}
```
