import 'package:flutter/material.dart';

class HomeNavigationDestination {
  const HomeNavigationDestination(this.label, this.icon, this.selectedIcon);

  final String label;
  final Widget icon;
  final Widget selectedIcon;
}

const List<HomeNavigationDestination> homeDestinations = [
  HomeNavigationDestination(
    'Home',
    Icon(Icons.home_outlined),
    Icon(Icons.home),
  ),
  HomeNavigationDestination(
    'About',
    Icon(Icons.info_outlined),
    Icon(Icons.info),
  ),
  HomeNavigationDestination(
    'Works',
    Icon(Icons.work_outline_outlined),
    Icon(Icons.work),
  ),
  HomeNavigationDestination(
    'Contact',
    Icon(Icons.mail_outlined),
    Icon(Icons.mail),
  ),
];
