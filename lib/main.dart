import 'package:flutter/material.dart';
import 'package:portfolio/core/constants.dart';
import 'package:portfolio/core/theme/theme.dart';
import 'package:portfolio/navigation/route_configuration.dart';
import 'package:flutter_web_plugins/flutter_web_plugins.dart';

void main() {
  usePathUrlStrategy();
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return SafeArea(
      child: MaterialApp.router(
        title: appName,
        theme: themeDataLight,
        darkTheme: themeDataDark,
        debugShowCheckedModeBanner: false,
        routerConfig: router,
      ),
    );
  }
}
