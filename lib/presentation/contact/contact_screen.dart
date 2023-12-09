import 'package:flutter/material.dart';
import 'package:portfolio/core/constants.dart';
import 'package:social_media_buttons/social_media_button.dart';
import '../../core/responsive.dart';

class ContactScreen extends StatefulWidget {
  const ContactScreen({super.key});

  @override
  State<ContactScreen> createState() => _ContactScreenState();
}

class _ContactScreenState extends State<ContactScreen> {
  @override
  Widget build(BuildContext context) {
    double screenInset = getInsets(context);

    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        SizedBox(height: screenInset),
        Padding(
          padding: const EdgeInsets.all(24.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                'Let\'s talk.',
                style: Theme.of(context).textTheme.displayLarge,
              ),
              const SizedBox(
                height: 30,
              ),
              Text(
                'Feel free to reach out for collaborations or just a friendly hello.',
                style: Theme.of(context).textTheme.bodyLarge,
              ),
              const SizedBox(
                height: 100,
              ),
              Text(
                gmailId,
                style: Theme.of(context).textTheme.displaySmall,
              ),
              const SizedBox(
                height: 30,
              ),
              Row(
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
        ),
        SizedBox(height: screenInset),
      ],
    );
  }
}
