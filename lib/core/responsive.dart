import 'package:flutter/material.dart';
import 'package:portfolio/core/insets.dart';

enum WindowClass { compat, medium, expanded }

WindowClass getWindowSizeClass(BuildContext context) {
  double deviceWidth = MediaQuery.of(context).size.width;
  if (deviceWidth < 600) {
    // Phone in portrait
    return WindowClass.compat;
  }
  if (deviceWidth >= 600 && deviceWidth <= 840) {
    // Tablet in portrait
    // Foldable in portrait (unfolded)
    return WindowClass.medium;
  }
  // Phone in landscape
  // Tablet in landscape
  // Foldable in landscape (unfolded)
  // Desktop
  return WindowClass.expanded;
}

double getInsets(BuildContext context) {
  WindowClass windowClass = getWindowSizeClass(context);
  if (windowClass == WindowClass.compat) {
    return Insets.compat;
  }
  if (windowClass == WindowClass.medium) {
    return Insets.medium;
  }
  return Insets.expanded;
}

// enum NavigationType {
//   modalNavigationDrawer,
//   navigationRail,
//   standardNavigationDrawer
// }
//
// NavigationType getNavigationType(BuildContext context) {
//   WindowClass windowClass = getWindowSizeClass(context);
//   Orientation orientation = MediaQuery.of(context).orientation;
//
//   if (windowClass == WindowClass.compat) {
//     return orientation == Orientation.portrait
//         ? NavigationType.modalNavigationDrawer
//         : NavigationType.navigationRail;
//   }
//   if (windowClass == WindowClass.medium) {
//     return NavigationType.navigationRail;
//   }
//   return orientation == Orientation.portrait
//       ? NavigationType.navigationRail
//       : NavigationType.standardNavigationDrawer;
// }
