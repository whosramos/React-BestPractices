# React Best Practices
If you’re a frontend developer engaged in building highly interactive user interfaces, you’ve most likely got React in your toolkit. While working on your React-powered creations, you should be careful to do things in tune with the React best practices. This will help to keep your code better organized.

As you know, React is a library created by Facebook and it allows for integration with many interesting components. In fact, any developer can create their own components and make them accessible to the community.


## Keep components small and function-specific
As we all know, with React, it’s possible to have huge components that execute a number of tasks. But a better way to design components is to keep them small, so that one component corresponds to one function. Ideally, a single component should render a specific bit of your page or modify a particular behavior. There are many advantages to this:

* Function-specific components can be standalone, which makes testing and maintenance easier.
* Each small component can be reused across multiple projects.
* Components executing general functions can be made available to the community.
* With smaller components, it’s easier to implement performance optimizations.
* It’s easier to update smaller components.
* Bigger components have to perform harder and may be difficult to maintain.

The balance between creating one concise component and creating multiple function-specific components can vary from organization to organization. After all, you can have as many components as you want, and recombine them in any way you want to achieve the same end result.


## Reusability is important, so keep creation of new components to the minimum required
By sticking to the rule of one function = one component, you can improve the reusability of components. What this means is that you should skip trying to build a new component for a function if there already exists a component for that function.

By reusing components across your project or across any number of projects, not only will you achieve consistency, you’ll also be contributing to the community.

On the other hand, if any component becomes huge, unwieldy and difficult to maintain, it’s better to break it up into as many smaller components as required.

For example, you can even go further and create a Button component that can handle icons. Then, each time you need a ```button```, you’ll have a component to use. Making it more modular will allow you to cover many cases with the same piece of code. You have to aim somewhere in the middle. Your components should be abstract enough, but shouldn’t be overly complex.

```js
class IconButton extends React.Component {
  // [...]
  render() {
    return (
      <button onClick={this.props.onClick()}>
        <i class={this.props.iconClass}></i>
      </button>
    );
  }
}
```

## Consolidate duplicate code – DRY your code
A common rule for all code is to keep it as brief and concise as possible.

It’s no different here too, since React best practices also instruct you to keep code brief and precise. One way to do this is to avoid duplication – Don’t Repeat Yourself (DRY).

You can achieve this by scrutinizing the code for patterns and similarities. If you find any, it’s possible you’re repeating code and there’s scope to eliminate duplication. Most likely, a bit of rewriting can make it more concise.

This relies heavily on the reusability principle in React. Let’s say you want to add multiple buttons that contain icons, instead of adding the markup for each button, you can simply use the ```IconButton``` component that we shown above. You could even go further by mapping everything into an array.

```js
const buttons = ['facebook', 'twitter', 'youtube'];

return (
  <div>
    {
      buttons.map( (button) => {
        return (
          <IconButton
            onClick={doStuff( button )}
            iconClass={button}
          />
        );
      } )
    }
  </div>
);
```

## Put CSS in JavaScript
When you start working on a project, it is a common practice to keep all the CSS styles in a single SCSS file. The use of a global prefix prevents any potential name collisions. However, when your project scales up, this solution may not be feasible.

There are many libraries that enable you to write CSS in JS. [**EmotionJS**](https://github.com/emotion-js/emotion) and [**Glamorous**](https://glamorous.rocks/) are the two most popular CSS in JS libraries.

Here’s an example of using EmotionJS in your project. EmotionJS can generate complete CSS files for your production. First, install EmotionJS using ```npm```.

```js
npm install --save @emotion/core
```

Next, you need to import EmotionJS in your application.
```js
import { jsx } from '@emotion/core'
```

You can set the properties of an element as shown in the snippet below:
```js
let Component = props => {
  return (
    <div
      css={{
        border: '1px'
      }}
      {...props}
    />
  )
}
```

Here is the link to the complete [documentation of EmotionJS](https://emotion.sh/docs/introduction].

## Comment only where necessary
Attach comments to code only where necessary. This is not only in keeping with React best practices, it also serves two purposes at the same time:

* It’ll keep code visually clutter free.
* You’ll avoid a potential conflict between comment and code, if you happen to alter the code at some later point in time.

## Name the component after the function
It’s a good idea to name a component after the function that it executes so that it’s easily recognizable.

For example, ```ProductTable ``` – it conveys instantly what the component does. On the other hand, if you name the component based on the need for the code, it can confuse you at a future point of time.

Another example, it’s preferable to name a component  ```Avatar ``` so that it can be used anywhere – for authors, users or in comments. Instead, if we name the component  ```AuthorAvatar ``` in the context of its usage, we’d be limiting the utility of that component.

Besides, naming a component after the function makes it more useful to the community as it’s more likely to be discovered.

## Use capitals for component names
If, like most folks, you’re using JSX (a JavaScript extension), the names of the components you create need to begin with uppercase letters. For instance, you’ll name components as ```SelectButton``` instead of ```selectbutton```, or ```Menu``` instead of ```menu```. We do this so that JSX can identify them differently from default HTML tags.

Earlier React versions maintained a list of all built-in names to differentiate them from custom names. But as the list needed constant updating, that was scrapped and capitals became the norm.

In case JSX is not your language of choice, you can use lowercase letters. However, this may reduce the reusability of components beyond your project.

## Mind the other naming conventions
When working with React, you are generally using JSX (JavaScript Extension) files. Any component that you create for React should therefore be named in Pascal case, or upper camel case. This translates to names without spaces and the capitalizing the first letter of every word.

If you want to create a function that submits a form, you should name it ```SubmitForm``` in upper camel case, rather than ```submitForm```, ```submit_form```, or ```submit_form```. Upper camel case is more commonly called Pascal case. Here is a further [**list of examples**](https://techterms.com/definition/pascalcase) of variable and function names in Pascal case.
