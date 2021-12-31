package com.reactnativecleardata;

import android.app.ActivityManager;
import android.content.Context;
import android.os.Build;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.module.annotations.ReactModule;

import java.io.File;


@ReactModule(name = ClearDataModule.NAME)
public class ClearDataModule extends ReactContextBaseJavaModule {
    public static final String NAME = "ClearData";

    private static ReactApplicationContext context;

    public ClearDataModule(ReactApplicationContext reactContext) {
        super(reactContext);
        ClearDataModule.context = getReactApplicationContext();
    }

    // Get App Context
    public static Context getAppContext() {
        return ClearDataModule.context;
    }


    @Override
    @NonNull
    public String getName() {
        return NAME;
    }


    // Example method
    // See https://reactnative.dev/docs/native-modules-android
    
    @ReactMethod
    public void clearAppData() {
        try {
            // Clear app data
            if (Build.VERSION_CODES.KITKAT <= Build.VERSION.SDK_INT) {
                ((ActivityManager)getAppContext().getSystemService(Context.ACTIVITY_SERVICE)).clearApplicationUserData();
            } else {
                String packageName = getAppContext().getPackageName();
                Runtime runtime = Runtime.getRuntime();
                runtime.exec("pm clear " + packageName);
            }
        }
        catch (Exception e) {
            e.printStackTrace();
        }
    }

    public static native int nativeMultiply(int a, int b);
}
