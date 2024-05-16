import 'package:flutter/material.dart';
import 'package:portfolio/core/constants.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../core/responsive.dart';

class FooterHome extends StatelessWidget {
  const FooterHome({super.key});

  @override
  Widget build(BuildContext context) {
    double screenInset = getInsets(context);
    WindowClass windowClass = getWindowSizeClass(context);
    bool useVerticalLayout = windowClass != WindowClass.expanded;

    return Column(
      children: [
        const Divider(),
        SizedBox(height: screenInset),
        Padding(
          padding: EdgeInsets.symmetric(horizontal: screenInset),
          child: Flex(
            direction: useVerticalLayout ? Axis.vertical : Axis.horizontal,
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              useVerticalLayout
                  ? _detailsContainer()
                  : Expanded(
                      flex: 5,
                      child: _detailsContainer(),
                    ),
              const SizedBox(
                width: 24,
                height: 24,
              ),
              useVerticalLayout
                  ? _linksContainer(context)
                  : Expanded(
                      flex: 5,
                      child: _linksContainer(context),
                    ),
            ],
          ),
        ),
        const SizedBox(height: 24),
      ],
    );
  }

  Widget _detailsContainer() {
    return const Padding(
      padding: EdgeInsets.symmetric(horizontal: 24.0),
      child: Text(
        'Passionate about technology and its limitless possibilities. Mobile application developer. Constantly pushing boundaries to bring ideas to life through coding and design. Let\'s connect and explore the world of innovation together!',
      ),
    );
  }

  Widget _linksContainer(BuildContext context) {
    const Widget kSpacer = SizedBox(height: 12);

    return Padding(
      padding: const EdgeInsets.symmetric(horizontal: 24.0),
      child: Row(
        children: [
          Expanded(
            flex: 5,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Pages'),
                kSpacer,
                LinksContainerListItem(
                  text: 'Home',
                  onTap: () {},
                ),
                kSpacer,
                LinksContainerListItem(
                  text: 'Projects',
                  onTap: () {},
                ),
                kSpacer,
                LinksContainerListItem(
                  text: 'Contact',
                  onTap: () {},
                ),
                kSpacer,
                LinksContainerListItem(
                  text: 'About',
                  onTap: () {},
                ),
              ],
            ),
          ),
          Expanded(
            flex: 5,
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.start,
              children: [
                const Text('Socials'),
                kSpacer,
                LinksContainerListItem(
                  text: 'Instagram',
                  onTap: () {
                    _launchUrl(Uri.parse(instagramProfile));
                  },
                ),
                kSpacer,
                LinksContainerListItem(
                  text: 'LinkedIn',
                  onTap: () {
                    _launchUrl(Uri.parse(linkedInProfile));
                  },
                ),
                kSpacer,
                LinksContainerListItem(
                  text: 'Twitter',
                  onTap: () {
                    _launchUrl(Uri.parse(xProfile));
                  },
                ),
                kSpacer,
                LinksContainerListItem(
                  text: 'Facebook',
                  onTap: () {
                    _launchUrl(Uri.parse(facebookProfile));
                  },
                ),
              ],
            ),
          )
        ],
      ),
    );
  }

  Future<void> _launchUrl(Uri url) async {
    if (!await launchUrl(url)) {
      throw Exception('Could not launch $url');
    }
  }
}

class LinksContainerListItem extends StatefulWidget {
  const LinksContainerListItem({required this.text, this.onTap, super.key});

  final String text;
  final void Function()? onTap;

  @override
  State<LinksContainerListItem> createState() => _LinksContainerListItemState();
}

class _LinksContainerListItemState extends State<LinksContainerListItem> {
  bool isHovering = false;

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: widget.onTap,
      onHover: (hovering) {
        setState(() => isHovering = hovering);
      },
      child: Text(
        widget.text,
        style: TextStyle(
            color: Theme.of(context).colorScheme.primary,
            decoration:
                isHovering ? TextDecoration.underline : TextDecoration.none),
      ),
    );
  }
}
