import 'package:flutter/material.dart';
import 'package:portfolio/core/constants.dart';
import 'package:portfolio/core/responsive.dart';
import 'package:portfolio/models/project.dart';
import 'package:social_media_buttons/social_media_button.dart';
import 'package:url_launcher/url_launcher.dart';
import 'widgets/projects_list_item.dart';

class HomeScreen extends StatefulWidget {
  const HomeScreen({super.key});

  @override
  State<HomeScreen> createState() => _HomeScreenState();
}

class _HomeScreenState extends State<HomeScreen> {
  @override
  Widget build(BuildContext context) {
    final WindowClass windowClass = getWindowSizeClass(context);
    final isDarkMode = Theme.of(context).brightness == Brightness.dark;
    final List<Project> projects = [
      Project(
        'Contacts',
        'A Compose Multiplatform based version of the Contacts application. Allows the user to create and view contacts. We\'ll make use of Material3 and dynamic colors, so we can stick to Google\'s design guidelines.',
        isDarkMode
            ? 'assets/images/contacts-dark.png'
            : 'assets/images/contacts.png',
      ),
      Project(
        'Insta Movies v2',
        'Insta Movies is the world\'s most popular and authoritative source for movie, TV and celebrity content. Find ratings and reviews, watch trailers, browse photos, and discover where to stream or rent the best movies and TV shows.',
        isDarkMode
            ? 'assets/images/insta-movies-v2-dark.png'
            : 'assets/images/insta-movies-v2.png',
      ),
      Project(
        'Edumate',
        'Edumate makes it easy for learners and instructors to connect – inside and outside of schools. Edumate saves time and paper and makes it easy to create classes, distribute assignments, communicate and stay organised.',
        isDarkMode
            ? 'assets/images/edumate-dark.png'
            : 'assets/images/edumate.png',
      ),
      Project(
        'Insta Movies v1',
        'Insta Movies is an Android app which allows you to watch, stream and download FREE and 1080p HD TV shows and movies on your Android devices. It provides almost latest TV shows and movies. Absolutely free. You can download them on your Android device or watch online. Watching movies and TV shows are the best entertainment!',
        isDarkMode
            ? 'assets/images/insta-movies-v1-dark.png'
            : 'assets/images/insta-movies-v1.png',
      ),
    ];
    double screenInset = getInsets(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(height: screenInset),
        _profileRow(windowClass),
        const SizedBox(
          height: 16,
        ),
        GridView.builder(
          shrinkWrap: true,
          physics: const NeverScrollableScrollPhysics(),
          gridDelegate: SliverGridDelegateWithFixedCrossAxisCount(
            crossAxisCount: windowClass == WindowClass.compat ? 1 : 2,
            mainAxisSpacing: 16,
            crossAxisSpacing: 16,
            childAspectRatio: 1,
          ),
          itemBuilder: (BuildContext context, int index) {
            return ProjectsListItem(
              title: projects[index].title,
              subTitle: projects[index].subTitle,
              imageUrl: projects[index].imageUrl,
            );
          },
          itemCount: projects.length,
        ),
        const SizedBox(height: 24),
      ],
    );
  }

  Widget _profileRow(WindowClass windowClass) {
    bool useVerticalLayout = windowClass != WindowClass.expanded;

    if (useVerticalLayout) {
      return Column(
        children: [
          AspectRatio(
            aspectRatio: 4 / 3,
            child: _profilePictureCard(),
          ),
          const SizedBox(height: 16),
          _profileDetailsCard(windowClass),
        ],
      );
    } else {
      return Container(
        constraints: const BoxConstraints(maxHeight: 460),
        width: double.infinity,
        child: AspectRatio(
          aspectRatio: 16 / 9,
          child: Row(
            children: [
              Expanded(
                flex: 6,
                child: _profileDetailsCard(windowClass),
              ),
              const SizedBox(width: 16),
              Expanded(
                flex: 4,
                child: _profilePictureCard(),
              ),
            ],
          ),
        ),
      );
    }
  }

  Widget _profilePictureCard() {
    return Card(
      margin: EdgeInsets.zero,
      color: Theme.of(context).colorScheme.surfaceVariant,
      child: Image.asset(
        'assets/images/avatar.png',
        fit: BoxFit.cover,
        alignment: Alignment.topCenter,
      ),
    );
  }

  Widget _profileDetailsCard(WindowClass windowClass) {
    bool useVerticalLayout = windowClass == WindowClass.compat;

    return Card(
      margin: EdgeInsets.zero,
      color: Theme.of(context).colorScheme.surfaceVariant,
      child: Padding(
        padding: const EdgeInsets.all(24.0),
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.start,
          children: [
            Text(
              'Hi,\nI\'m Mubashir.\nMobile Application Developer.',
              style: Theme.of(context).textTheme.displaySmall,
            ),
            const SizedBox(
              height: 30,
            ),
            Text(
              'Unleashing innovation through technology. Android & Flutter Developer. Crafting seamless experiences with code and design. Let\'s bring your ideas to life!',
              style: Theme.of(context).textTheme.bodyMedium,
            ),
            windowClass == WindowClass.expanded
                ? const Spacer()
                : const SizedBox(height: 30),
            Flex(
              direction: useVerticalLayout ? Axis.vertical : Axis.horizontal,
              mainAxisAlignment: MainAxisAlignment.start,
              children: [
                useVerticalLayout
                    ? SizedBox(
                        width: double.infinity,
                        height: 40,
                        child: FilledButton(
                          onPressed: () {
                            _launchUrl(Uri.parse('mailto:$gmailId'));
                          },
                          style: ElevatedButton.styleFrom(
                            // Set a fixed height for ElevatedButton
                            minimumSize: const Size(double.minPositive, 40.0),
                          ),
                          child: const Text('Contact me'),
                        ),
                      )
                    : SizedBox(
                        height: 40,
                        child: FilledButton(
                          onPressed: () {
                            _launchUrl(Uri.parse('mailto:$gmailId'));
                          },
                          style: ElevatedButton.styleFrom(
                            // Set a fixed height for ElevatedButton
                            minimumSize: const Size(double.minPositive, 40.0),
                          ),
                          child: const Text('Contact me'),
                        ),
                      ),
                const SizedBox(
                  width: 8,
                  height: 24,
                ),
                Row(
                  mainAxisAlignment: MainAxisAlignment.spaceBetween,
                  children: [
                    Ink(
                      decoration: const ShapeDecoration(
                        color: Colors.white,
                        shape: CircleBorder(),
                      ),
                      child: const Center(
                        child: SocialMediaButton.instagram(
                          url: instagramProfile,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    const SizedBox(
                      width: 8,
                    ),
                    Ink(
                      decoration: const ShapeDecoration(
                        color: Colors.white,
                        shape: CircleBorder(),
                      ),
                      child: const Center(
                        child: SocialMediaButton.linkedin(
                          url: linkedInProfile,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    const SizedBox(
                      width: 8,
                    ),
                    Ink(
                      decoration: const ShapeDecoration(
                        color: Colors.white,
                        shape: CircleBorder(),
                      ),
                      child: const Center(
                        child: SocialMediaButton.twitter(
                          url: xProfile,
                          color: Colors.black,
                        ),
                      ),
                    ),
                    const SizedBox(
                      width: 8,
                    ),
                    Ink(
                      decoration: const ShapeDecoration(
                        color: Colors.white,
                        shape: CircleBorder(),
                      ),
                      child: const Center(
                        child: SocialMediaButton.facebook(
                          url: facebookProfile,
                          color: Colors.black,
                        ),
                      ),
                    ),
                  ],
                )
              ],
            ),
          ],
        ),
      ),
    );
  }

  Future<void> _launchUrl(Uri url) async {
    if (!await launchUrl(url)) {
      throw Exception('Could not launch $url');
    }
  }
}
