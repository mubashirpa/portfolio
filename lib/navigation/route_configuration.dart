import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import 'package:portfolio/core/constants.dart';
import 'package:portfolio/navigation/screen_routes.dart';
import 'package:portfolio/presentation/about/about_screen.dart';
import 'package:portfolio/presentation/contact/contact_screen.dart';
import 'package:portfolio/presentation/error/error_screen.dart';
import 'package:portfolio/presentation/home/home_widget.dart';
import 'package:portfolio/presentation/projects/projects_screen.dart';

final key = GlobalKey<NavigatorState>();

final GoRouter router = GoRouter(
    navigatorKey: key,
    initialLocation: "/",
    routes: <RouteBase>[
      GoRoute(
        path: ScreenRoutes.HOME_SCREEN,
        builder: (BuildContext context, GoRouterState state) =>
            const HomeWidget(title: appName),
      ),
      GoRoute(
        path: ScreenRoutes.PROJECTS_SCREEN,
        builder: (BuildContext context, GoRouterState state) =>
            const ProjectsScreen(),
      ),
      GoRoute(
        path: ScreenRoutes.CONTACT_SCREEN,
        builder: (BuildContext context, GoRouterState state) =>
            const ContactScreen(),
      ),
      GoRoute(
        path: ScreenRoutes.ABOUT_SCREEN,
        builder: (BuildContext context, GoRouterState state) =>
            const AboutScreen(),
      )
    ],
    errorBuilder: (context, state) {
      return const ErrorScreen();
    });
