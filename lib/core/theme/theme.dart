import 'package:flutter/material.dart';
import 'color_schemes.dart';

VisualDensity density = const VisualDensity();

final ThemeData themeDataLight = ThemeData(
  useMaterial3: true,
  visualDensity: density,
  colorScheme: lightColorScheme,
  scaffoldBackgroundColor: lightColorScheme.background,
);

final ThemeData themeDataDark = ThemeData(
  useMaterial3: true,
  visualDensity: density,
  colorScheme: darkColorScheme,
  scaffoldBackgroundColor: darkColorScheme.background,
);
