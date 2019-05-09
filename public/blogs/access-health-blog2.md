# Access Health Development Blog #2

Welcome to part 2 of my blog on the progress of the Access Health website! If
you haven’t read [part
1](https://medium.com/@angelospmusic/access-health-development-blog-1-81257ecf4bb3),
I’d recommend reading it first before reading on.

![](https://cdn-images-1.medium.com/max/1600/1*cNnvJDYx-RYlhgVZRKY7xw.gif)
<span class="figcaption_hack">Donating works!</span>

### Progress

In part 1, I mentioned that my next big goal was to successfully process
payments. As of this afternoon, this goal was accomplished using the Stripe API!
This was one of the most difficult things to implement thus far in my web
development career, and there were many times in the past week I wasn’t sure if
it was going to work. I started working on this on Friday, and finished it up
today (Tuesday).

#### Stripe

Stripe provides a secure infrastructure for websites to process payments. I
decided to use it because I had heard that it was one of the easier payment
processing APIs to understand and that it also had great documentation. I found
this to be mostly true, although the pieces I needed for my app were scattered
throughout, and sometimes not there at all. At the beginning of this process I
found myself struggling to figure out where to begin, and I have [Ayana Zaire
Cotton](https://github.com/AyanaZaire) to thank for getting me on track.

### Challenges

Because my app is a crowdfunding platform, the payments that the site handles
have to come from and go to the site’s users. Other sites that are selling goods
(such as apple.com) send all of their payments to central location. When you buy
a MacBook, all of that money is going to Apple and not to other users of the
Apple website. For Access Health, donations need to be sent to the correct user
based on their campaign. This was a big challenge and was made easier by
Stripe’s Connect feature.

#### 1. Integrating Stripe Oauth

The first step I took was to enable users to register through Stripe in order to
get a unique Stripe user ID. This is the first step in allowing users to send
each other money, the only way to do that is if they have a unique identifier on
Stripe. If the user is new to the site and wants to donate or create a campaign,
they are redirected to the page below where they setup their payment profile.

<span class="figcaption_hack">Stripe Oauth + API responses</span>

After they’ve finished, they’re redirected to their profile page which has some
information from the Stripe API. The image to the right shows the response from
the API after authentication which has a ton of information!

#### 2. Fetching from the Stripe API

I jumped a little bit ahead with the above right picture, but the next step was
to be able to access all of the info that the user had submitted when setting up
their Stripe account. I’m using this to populate some data on the profile page,
such as the user’s available and pending balance. Also, now that I’m feeling
much more comfortable with Redux, I wrote some thunks to accomplish this.

<span class="figcaption_hack">Thunks + Payment profile section of the profile page (styling/info on this page
is incomplete)</span>

#### 3. Accepting Donations

This was the final step and was the one that took the longest. The .gif at the
top of this article shows the current flow that I have for when a user donates
to a campaign. In order to process the donation with Stripe, I created a new
charges_controller in my Rails API. After sending a POST request from the front
end to this controller, it creates the Stripe charge. This causes it show up on
the Stripe dashboard. Then, back on the front end, a similar POST request is
made to my donation_controller so that the donation data persists in my
database. Whew! The fruits of my labor are pictured below, check out how many
transactions I have already processed (just kidding it’s all test data).

With this done, I officially reached the MVP just in time for the Wednesday
deadline.

### Lessons Learned

Going through this process, I gained a lot of insight about what goes on behind
the scenes when paying for things online. Just like authorization and
authentication, I was naive to just how complex it is to handle payments and
have a lot more respect for people that have successfully implemented it.

### Going Forward

I realize that the current flow of payments on Access Health is not ideal, users
have to leave the site to authenticate their payment info through a third party
before they can utilize the core functionalities. The feedback that the site
gives to the user as they use the site also needs a lot of improvement. For now,
I am satisfied with payments functioning at all and will look for ways to
improve it later.

The next objectives for me are adding logic to handle what happens when
campaigns are successfully funded or not, and to set up Action Mailer to send
users emails based on that. I’ll get started on that tomorrow once I’ve cleaned
up some code and added a few comments. Thanks again for reading, [click here for
part
3](https://medium.com/@angelospmusic/access-health-development-blog-3-744969f3e569)!

* [Stripe](https://medium.com/tag/stripe?source=post)
* [Payment Processing](https://medium.com/tag/payment-processing?source=post)
* [Payments](https://medium.com/tag/payments?source=post)
* [Oauth](https://medium.com/tag/oauth?source=post)
* [Crowdfunding](https://medium.com/tag/crowdfunding?source=post)

