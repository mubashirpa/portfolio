import 'package:flutter/material.dart';
import '../../core/responsive.dart';

class AboutScreen extends StatelessWidget {
  const AboutScreen({super.key});

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
                'About Me',
                style: Theme.of(context).textTheme.displayLarge,
              ),
              const SizedBox(
                height: 30,
              ),
              Text(
                'I am currently pursuing my B.E. in Computer Science and Engineering, fueled by my passion for the'
                'ever-evolving field of technology. Throughout my educational journey, I have been proactive in'
                'expanding my knowledge and skills. I have dedicated myself to self-learning, allowing me to'
                'acquire expertise in various domains, including Android application development and Flutter'
                'application development. While my foundation encompasses the core concepts of programming'
                'languages, my true strengths lie in my ability to think creatively and analyze complex problems. I'
                'am driven by a desire to bring innovative ideas to life and make a meaningful impact in the realm'
                'of technology.',
                style: Theme.of(context).textTheme.bodyLarge,
              ),
              const SizedBox(
                height: 30,
              ),
            ],
          ),
        ),
        SizedBox(height: screenInset),
      ],
    );
  }
}
