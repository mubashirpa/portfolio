import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../core/responsive.dart';
import '../../navigation/screen_routes.dart';

class ComingSoon extends StatelessWidget {
  const ComingSoon({super.key});

  @override
  Widget build(BuildContext context) {
    return Padding(
      padding: EdgeInsets.all(getInsets(context)),
      child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Text(
            'Page under construction',
            style: Theme.of(context)
                .textTheme
                .titleLarge
                ?.copyWith(color: Theme.of(context).colorScheme.primary),
          ),
          const SizedBox(
            height: 16,
          ),
          Text(
            'This page is still under construction.',
            style: Theme.of(context)
                .textTheme
                .bodySmall
                ?.copyWith(color: Theme.of(context).colorScheme.outline),
          ),
          const SizedBox(
            height: 24,
          ),
          FilledButton(
            onPressed: () => GoRouter.of(context).go(ScreenRoutes.HOME_SCREEN),
            child: const Text('Go back'),
          ),
        ],
      ),
    );
  }
}
