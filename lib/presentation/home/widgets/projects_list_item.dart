import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../navigation/screen_routes.dart';

@immutable
class ProjectsListItem extends StatefulWidget {
  const ProjectsListItem({
    super.key,
    required this.title,
    required this.subTitle,
    required this.imageUrl,
  });

  final String title;
  final String subTitle;
  final String imageUrl;

  @override
  State<ProjectsListItem> createState() => _ProjectsListItemState();
}

class _ProjectsListItemState extends State<ProjectsListItem> {
  bool isHovering = false;

  @override
  Widget build(BuildContext context) {
    return AspectRatio(
      aspectRatio: 1 / 1,
      child: AnimatedContainer(
        duration: const Duration(milliseconds: 200),
        curve: Curves.ease,
        padding: EdgeInsets.all(isHovering ? 10 : 0),
        decoration: BoxDecoration(
          borderRadius: BorderRadius.circular(12),
        ),
        child: InkWell(
          onTap: () {
            GoRouter.of(context).go(ScreenRoutes.ABOUT_SCREEN);
          },
          onHover: (hovering) {
            setState(() => isHovering = hovering);
          },
          borderRadius: BorderRadius.circular(12),
          child: Card(
            margin: EdgeInsets.zero,
            color: Theme.of(context).colorScheme.surfaceVariant,
            child: Padding(
              padding: const EdgeInsets.all(24.0),
              child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                  Text(
                    widget.title,
                    style: Theme.of(context).textTheme.titleLarge,
                  ),
                  const SizedBox(
                    height: 4,
                  ),
                  Text(
                    widget.subTitle,
                    style: Theme.of(context).textTheme.labelLarge,
                    maxLines: 2,
                    overflow: TextOverflow.ellipsis,
                  ),
                  const SizedBox(
                    height: 30,
                  ),
                  Expanded(
                    child: SizedBox(
                      width: double.infinity,
                      child: Image.asset(
                        widget.imageUrl,
                        fit: BoxFit.fitHeight,
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
      ),
    );
  }
}
