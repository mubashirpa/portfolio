import 'package:flutter/material.dart';
import 'package:portfolio/core/responsive.dart';
import 'package:portfolio/navigation/home_navigation_rail.dart';
import 'package:portfolio/presentation/home/home_screen.dart';
import 'package:portfolio/presentation/home/widgets/footer_home.dart';
import 'package:portfolio/presentation/widgets/coming_soon.dart';
import '../../navigation/home_navigation_drawer.dart';
import '../about/about_screen.dart';
import '../contact/contact_screen.dart';
import '../projects/projects_screen.dart';

class HomeWidget extends StatefulWidget {
  const HomeWidget({super.key, required this.title});

  final String title;

  @override
  State<HomeWidget> createState() => _HomeWidgetState();
}

class _HomeWidgetState extends State<HomeWidget> {
  int selectedScreen = 0;

  @override
  Widget build(BuildContext context) {
    final GlobalKey<ScaffoldState> scaffoldKey = GlobalKey<ScaffoldState>();
    WindowClass windowClass = getWindowSizeClass(context);
    const double toolbarHeight = 64;
    double screenInset = getInsets(context);
    const List<Widget> destinations = [
      HomeScreen(),
      AboutScreen(),
      ProjectsScreen(),
      ProjectsScreen(),
      ContactScreen(),
    ];

    Widget menuIcon() {
      return IconButton(
        onPressed: () {
          scaffoldKey.currentState!.openDrawer();
        },
        icon: const Icon(Icons.menu),
      );
    }

    return Scaffold(
      key: scaffoldKey,
      body: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          windowClass != WindowClass.compat
              ? HomeNavigationRail(
                  scaffoldKey: scaffoldKey,
                  selectedIndex: selectedScreen,
                  onDestinationSelected: (selectedIndex) {
                    setState(() {
                      selectedScreen = selectedIndex;
                    });
                  },
                )
              : const SizedBox(),
          Expanded(
            child: CustomScrollView(
              slivers: [
                windowClass == WindowClass.compat
                    ? SliverAppBar(
                        pinned: windowClass != WindowClass.compat,
                        snap: windowClass == WindowClass.compat,
                        floating: windowClass == WindowClass.compat,
                        title: Text(widget.title),
                        backgroundColor:
                            Theme.of(context).colorScheme.background,
                        surfaceTintColor: windowClass == WindowClass.compat
                            ? null
                            : Theme.of(context).colorScheme.background,
                        toolbarHeight: toolbarHeight,
                        leading: windowClass == WindowClass.compat
                            ? menuIcon()
                            : null,
                        automaticallyImplyLeading: false,
                        centerTitle: windowClass == WindowClass.compat,
                      )
                    : const SliverToBoxAdapter(child: SizedBox()),
                SliverPadding(
                  padding: EdgeInsets.symmetric(horizontal: screenInset),
                  sliver: 0 <= selectedScreen &&
                          selectedScreen < destinations.length
                      ? SliverToBoxAdapter(child: destinations[selectedScreen])
                      : const SliverToBoxAdapter(child: ComingSoon()),
                ),
                const SliverFillRemaining(
                  hasScrollBody: false,
                  fillOverscroll: true,
                  child: Column(
                    mainAxisAlignment: MainAxisAlignment.end,
                    children: [
                      FooterHome(),
                    ],
                  ),
                ),
              ],
            ),
          ),
        ],
      ),
      drawer: PortfolioNavigationDrawer(
        scaffoldKey: scaffoldKey,
        selectedIndex: selectedScreen,
        onDestinationSelected: (selectedIndex) {
          setState(() {
            selectedScreen = selectedIndex;
          });
        },
      ),
    );
  }
}
