import 'package:flutter/material.dart';
import 'package:portfolio/navigation/home_navigation_destination.dart';
import '../core/responsive.dart';

class HomeNavigationRail extends StatelessWidget {
  const HomeNavigationRail(
      {super.key,
      required this.scaffoldKey,
      required this.selectedIndex,
      required this.onDestinationSelected});

  final GlobalKey<ScaffoldState> scaffoldKey;
  final int selectedIndex;
  final void Function(int) onDestinationSelected;

  @override
  Widget build(BuildContext context) {
    WindowClass windowClass = getWindowSizeClass(context);
    List<NavigationRailDestination> destinations =
        homeDestinations.map((HomeNavigationDestination destination) {
      return NavigationRailDestination(
        label: Text(destination.label),
        icon: destination.icon,
        selectedIcon: windowClass != WindowClass.expanded
            ? destination.selectedIcon
            : null,
      );
    }).toList();
    bool isExpanded = windowClass == WindowClass.expanded;

    Widget leading() {
      return Column(
        children: [
          SizedBox(
            height: 48, // toolbar height (64) - margin top of navigation rail (16)
            child: Row(
              children: [
                IconButton(
                  onPressed: () {
                    scaffoldKey.currentState!.openDrawer();
                  },
                  icon: const Icon(Icons.menu),
                )
              ],
            ),
          ),
          FloatingActionButton(
            elevation: 0,
            onPressed: () {
              // Add your onPressed code here!
            },
            child: const Icon(Icons.badge_outlined),
          ),
          isExpanded ? const SizedBox() : const SizedBox(height: 56)
        ],
      );
    }

    return NavigationRail(
      destinations: destinations,
      selectedIndex: selectedIndex,
      useIndicator: true,
      onDestinationSelected: onDestinationSelected,
      labelType: NavigationRailLabelType.all,
      groupAlignment: isExpanded ? 0.0 : -1.0,
      leading: leading(),
    );
  }
}
