> # To keep in mind and consider when developing
>
> - The best way to predict the future is to invent it. -- Alan Kay
>
> - The best time to plant fruit tress is five years ago. The second best time is now. -- proverb
>
> - You often don't really understand the problem until after the first time you implement a solution - The Cathedral and the Bazaar
>
> - Don't let perfection get in the way of progress. -- Unknown
>
> - The ‘overnight’ part of ‘overnight success’ is the sudden recognition of years of hard work — Kent Clothier

## Follow The Principles of Clean Code and Clean Architecture

Clean Architecture - Decouple the application from the framework

### Hexagonal Architecture

The intention of the `Hexagonal Architecture` is none other than to allow an application to be used in the same way by users, programs, automated tests or scripts, and to be developed and tested in isolation from its eventual devices and databases in execution time.

`Dependency inversion` is a design principle and it is the key to this architecture. In simple terms, it means we should not depend on low-level implementations, but rather rely on high-level abstractions. And that makes sense as it allows us to be agnostic towards the implementation details.Whether we want to change a specific implementation or support other implementations, the code will stay intact, as it’s decoupled from the low-level implementation details.

`Dependency injection` is a design pattern that allows us to separate creation from use. It allows us to “inject” the required objects at run-time, without worrying about constructing them ourselves. It also tends to work hand in hand with the dependency inversion principle.

References:

- [Hexagonal Architecture, there are always two sides to every story](https://medium.com/ssense-tech/hexagonal-architecture-there-are-always-two-sides-to-every-story-bc0780ed7d9c#%3A~%3Atext%3DThe%20Hexagonal%20Architecture%2C%20also%20referred%2Ca%20Port%20to%20an%20Adapter.)
- [Hexagonal Architecture](https://alistair.cockburn.us/hexagonal-architecture/)
- [Arquitectura Hexagonal](https://medium.com/%40edusalguero/arquitectura-hexagonal-59834bb44b7f)

## Refactoring & testing

### Refactoring

Refactoring is the process of changing a software system in such a way that it does not alter the external behavior of the code yet improves its internal structure. It is a disciplined way to clean up code that minimizes the chances of

- introducing bugs.
- making the code harder to read and understand.
- making the code harder to test and debug.
- making the code harder to maintain and document.
- making the code harder to reuse and scale.
- making future changes harder to implement.

### Testing

Software testing is one of the most critical aspects of the development process. Teams must find as many defects as possible before they get into production.  
Testing should not be the responsibility of only the testers to catch defects. Developers play a crucial role in detecting defects earlier by doing their fair share of testing too. We should write tests in a combination of unit, integration or system-level tests.

Here are six benefits you get from testing that’s done by developers prior to pushing code to QA:

- Catch defects early
- Write better code
- Contribute to documentation
- Make changes with confidence
- Reduce manual testing
- Improve team performance

References:

- [6 Benefits of Developer TEsting](https://www.ranorex.com/blog/developer-testing-benefits/)
- [TDD](https://www.codica.com/blog/test-driven-development-benefits/)

## [`BEM methodology`](https://getbem.com/) for CSS.

We use SCSS tools to write CSS code using the BEM methodology.

```css
.block {
  &__element {
  } // bem.support.element.scss
  &--modifier {
  } // bem.support.modifier.scss
}
```

## [`Markdown`](https://www.markdownguide.org/getting-started/) for docs

We use **markdown** files for writing the documentation for users and developers in github (following github style) even though we use [obsidian](https://obsidian.md/) internally.
