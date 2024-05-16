import 'package:flutter/material.dart';
import 'package:portfolio/navigation/home_navigation_destination.dart';

class PortfolioNavigationDrawer extends StatelessWidget {
  const PortfolioNavigationDrawer(
      {super.key,
      required this.scaffoldKey,
      required this.selectedIndex,
      required this.onDestinationSelected});

  final GlobalKey<ScaffoldState> scaffoldKey;
  final int selectedIndex;
  final void Function(int) onDestinationSelected;

  @override
  Widget build(BuildContext context) {
    const List<HomeNavigationDestination> drawerDestinations = [
      HomeNavigationDestination(
        'Experience',
        Icon(Icons.person_outlined),
        Icon(Icons.person),
      ),
      HomeNavigationDestination(
        'Certifications',
        Icon(Icons.workspace_premium_outlined),
        Icon(Icons.workspace_premium),
      ),
    ];

    void handleScreenChanged(int index) {
      if (scaffoldKey.currentState!.isDrawerOpen) {
        scaffoldKey.currentState!.closeDrawer();
      }
      if (index < homeDestinations.length) {
        onDestinationSelected(index);
      }
    }

    void closeDrawer() {
      scaffoldKey.currentState!.closeDrawer();
    }

    Widget header() {
      return Padding(
        padding: const EdgeInsets.fromLTRB(20, 0, 12, 0),
        child: SizedBox(
          width: double.infinity,
          height: 64,
          child: Row(
            children: [
              IconButton(
                onPressed: closeDrawer,
                icon: const Icon(Icons.menu_open),
              ),
            ],
          ),
        ),
      );
    }

    return NavigationDrawer(
      onDestinationSelected: handleScreenChanged,
      selectedIndex: selectedIndex,
      children: <Widget>[
        header(),
        Padding(
          padding: const EdgeInsets.only(left: 12.0, right: 12.0, bottom: 56.0),
          child: FloatingActionButton.extended(
            elevation: 0,
            onPressed: () {
              // Add your onPressed code here!
            },
            label: const Text("Resume"),
            icon: const Icon(Icons.badge_outlined),
          ),
        ),
        ...homeDestinations.map(
          (HomeNavigationDestination destination) {
            return NavigationDrawerDestination(
              label: Text(destination.label),
              icon: destination.icon,
              selectedIcon: destination.selectedIcon,
            );
          },
        ),
        const Divider(
          indent: 12,
          endIndent: 12,
        ),
        ...drawerDestinations.map(
          (HomeNavigationDestination destination) {
            return NavigationDrawerDestination(
              label: Text(destination.label),
              icon: destination.icon,
              selectedIcon: destination.selectedIcon,
            );
          },
        ),
      ],
    );
  }
}
