package com.bigdialer4;

import com.facebook.react.ReactActivity;

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "BigDialer4";
  }

  // @Override
  //   public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
  //       RNImmediatePhoneCallPackage.onRequestPermissionsResult(requestCode, permissions, grantResults); // very important event callback
  //       super.onRequestPermissionsResult(requestCode, permissions, grantResults);
  //   }  
}
