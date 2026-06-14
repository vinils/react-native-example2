package com.example2

import android.graphics.Color
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.uimanager.annotations.ReactProp
import com.facebook.react.viewmanagers.Example2ViewManagerInterface
import com.facebook.react.viewmanagers.Example2ViewManagerDelegate

@ReactModule(name = Example2ViewManager.NAME)
class Example2ViewManager : SimpleViewManager<Example2View>(),
  Example2ViewManagerInterface<Example2View> {
  private val mDelegate: ViewManagerDelegate<Example2View>

  init {
    mDelegate = Example2ViewManagerDelegate(this)
  }

  override fun getDelegate(): ViewManagerDelegate<Example2View>? {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): Example2View {
    return Example2View(context)
  }

  @ReactProp(name = "color")
  override fun setColor(view: Example2View?, color: Int?) {
    view?.setBackgroundColor(color ?: Color.TRANSPARENT)
  }

  companion object {
    const val NAME = "Example2View"
  }
}
