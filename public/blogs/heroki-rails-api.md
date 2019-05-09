# Heroku + Rails API + Javascript Front End

![](https://cdn-images-1.medium.com/max/1600/1*VGndun9WApVPi9IBhVdUwg.png)

In this blog, I am going to walk you through setting up a website using Heroku
to host the Ruby on Rails back end and, GitHub pages to host the front end. This
blog is for people who already have an API and front end set up and are ready to
present their web app to the world. It is also for people using Rails 5.0 and
above, and assumes you have your database setup using PostgreSQL.

> For a great tutorial on how to make a Rails API, [view this
> guide](https://medium.com/@hunter.j.nate/well-the-jerk-store-called-and-they-said-you-didnt-know-how-to-build-an-api-120eda19c836)
by Nate Hunter

#### Step One: Make an Account on Heroku

The first thing you’ll need to do is [make an account on
Heroku](https://signup.heroku.com/login). They have a free tier that you’ll be
using that includes the full functionality you’ll need.

#### Step Two: Heroku CLI

Next, make sure to install the Heroku CLI. If you’re using a Mac, enter:


For other operating systems, [view this
guide](https://devcenter.heroku.com/articles/heroku-cli#download-and-install)
for instructions. After it finishes installing, type `heroku login` and enter
the credentials you signed up with. It will also prompt you to generate a new
SSH public key if you don’t already have one (you will need this later to push
code).

> Note: Heroku uses PostgreSQL natively, and is much easier to use than any
> alternatives.

#### Step Three: Setup config/environments/production.rb

Before deploying, it is essential that your `config/environments/production.rb
`file includes the following code:

![](https://cdn-images-1.medium.com/max/1600/1*Y2Ha8Aw_xLgLvwSc6UmN0Q.png)

This enables static serving and logging on Heroku. It is often included by
default when you make a new Rails project, but it is important to make sure
those lines of code are there.

#### Step Four: Git

If you haven’t already, you’ll need to commit your code to Git. After making
sure that you’ve got Git installed on your computer and that you’re in the root
directory of your Rails back end, in terminal type:

    git init

`git init` creates an empty Git repository, `git add .` to adds all of your
files, and `git commit -m “first commit”` commits the files.

#### Step Five: Connect to Heroku

Now it’s time to deploy to Heroku! First you’ll need to create a Heroku app
(make sure you’ve completed step two and installed the Heroku CLI) by typing:

    heroku create
    git push heroku master
    heroku run rake db:migrate

`heroku create` creates the app, `git push heroku master` deploys the code, and
`heroku run rake db:migrate` migrates the database. After, we’ll need to make
sure that a dyno is running by typing (read more about dynos
[here](https://www.heroku.com/dynos)):

    heroku ps:scale web=1

With one dyno running now you can visit your API in the browser by typing:

    heroku open

Heroku will generate a URL for your API. If you want to use a custom domain for
your back end, visit [this
link](https://devcenter.heroku.com/articles/custom-domains) for help setting
that up. If you’ve made it this far, congrats! You’re now ready to connect our
back end and front end.

#### **Step 6: GitHub**

You’ll now need to [create a new repository on
GitHub](https://medium.com/@hunter.j.nate/the-basics-of-version-control-with-git-and-github-26971cec5591).
After that, since you’ve already initialized, added, and committed, lets skip
ahead to adding the remote repository URL.

Copy the URL from the “Clone or download” dropdown (making you are using
HTTPS!), add the URL for the remote repository you’ve just made, and push to the
repository.

    git remote add origin 
    git push -u origin master

Once you’ve pushed up everything, we’ll need to create a new branch in our
repository called `gh-pages`. The branch has to be named `gh-pages` because this
is the branch that GitHub recognizes when hosting the front end.

> It is possible to use the master branch to render the front end, but it is
> highly recommended to create the `gh-pages` branch. If you use master, any
change that is pushed to master will automatically show up on the live site.

Now go into the settings for your new repository and change the source from the
`master` branch to `gh-pages`. GitHub will take a few minutes to get the site
ready, and when it’s done you’ll see a message like the one in the screenshot
above.

#### Step 7: Connecting the front and back ends

The last step of this tutorial is to make sure that the site hosted on GitHub
and your API can communicate with each other. For me, this meant updating my
fetch request URLs from localhosts to the new Heroku URLs.

<span class="figcaption_hack">This is an example of an updated fetch request with the new Heroku URL</span>

To test that it is working, fire up your website that is now hosted on GitHub
and use your app. If it functions normally, then you’ve succeeded in hosting
your full stack website!

#### Resources

* [https://devcenter.heroku.com/articles/getting-started-with-rails](https://devcenter.heroku.com/articles/getting-started-with-rails5)5
- **A more in depth guide for setting up Heroku with Rails**
* [https://www.heroku.com/dynos](https://www.heroku.com/dynos) - **More info on
Heroku dynos**
* [https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line](https://help.github.com/en/articles/adding-an-existing-project-to-github-using-the-command-line)
- **Adding a project to GitHub**
* [https://evolfo.github.io/platformer/front-end/index.html](https://evolfo.github.io/platformer/front-end/index.html)
- **Play the game!**

* [Heroku](https://medium.com/tag/heroku?source=post)
* [Rails](https://medium.com/tag/rails?source=post)
* [Ruby on Rails](https://medium.com/tag/ruby-on-rails?source=post)
* [Backend](https://medium.com/tag/backend?source=post)
* [Front End
Development](https://medium.com/tag/front-end-development?source=post)

