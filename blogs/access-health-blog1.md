# Access Health Development Blog #1

![](https://cdn-images-1.medium.com/max/1600/1*lAC9ZC3iN2CMqIOWYBf0XQ.png)
<span class="figcaption_hack">1st draft of the landing page for Access Health</span>

Welcome! In this series of blogs, I will outline my thoughts and my process in
creating the Access Health website. Access Health is heavily inspired by my
favorite charity, [Donors Choose](https://www.donorschoose.org/). My goal in
creating this site is to make a crowdfunding platform for people who struggle to
pay their medical bills or are in medical debt.

Currently I am only a few weeks into being a full-stack developer, and this is
by far the biggest project I have ever taken on in this field. I have 3 weeks to
complete the site, as it is my final project for [Access
Labs](https://www.accesslabs.org/). I am writing this blog on day 4 of working
on it, and I am about 40% of the way to the site functioning at its bare
minimum.

For this project, I am using a custom-built Ruby on Rails API, React, Redux,
AWS, Material UI, and, hopefully, the Stripe API for payment processing.

### What Functions Now? What do I still need to do?

As of right now, users can log in, sign up, see all the campaigns, see a more
detailed view of each campaign, view a very bare bones profile page (it shows
their donations/campaigns if they exist), and create a campaign.

In order to get the site to fully function in its simplest capacity, I still
need to allow users to make donations to specific campaigns and incorporate a
payment processing API to enable this. I also need to enable users that create
campaigns to edit the title, description and image of their campaign once it has
been created. I want users to only be able create a campaign if they are logged
in. Currently, they can reach a create campaign form, but if they try to create
one it will throw an error.

### Challenges Faced

So far, the 3 biggest challenges I have faced and solved have been (in order of
difficulty):

1.  User authorization/authentication
1.  Incorporating AWS and Active Storage to allow photo uploading
1.  Dynamically updating a progress bar based on campaign donations

The amount of depth and detail that goes into seemingly mundane aspects of
websites such as logging in/out and uploading photos is fascinating to me. Based
on these new experiences it now makes sense why a new massive data breach is
listed on [https://haveibeenpwned.com/](https://haveibeenpwned.com/) every few
months.

#### 1. User Authorization/Authentication

This project was my third time implementing a secure log in/sign up, and I felt
confident in my ability to get it working with React. However, I decided to set
up my app using Redux at the start of the project, and I had only been
introduced to it four days prior. To add to this, I had only been introduced to
thunks that day and was struggling to conceptualize them.

![](https://cdn-images-1.medium.com/max/1600/1*HZoolnMmeuI5ua185t3_Ew.jpeg)
<span class="figcaption_hack">Redux architecture chart</span>

This image was written by a classmate and was right next to me. It was a huge
help and was there for me as I struggled.

#### 2. AWS + Active Storage

In order to allow my users to upload an image when they create a campaign, I
needed a way to store that image. I didn’t want to store it locally because that
method isn’t scalable, and I also was excited about learning a new thing (AWS).

In figuring this out I have [App Academy’s video
series](https://vimeo.com/278726984) on the subject to thank (and [Elizabeth
Le](https://github.com/elizabethlemk) for showing it to me!). The process took
about 4 hours and was fairly smooth. I ran into some small snags: at one point I
forgot to restart my Rails server after editing my secret credentials file and
my `storage.yml` file, later I forgot to seed my database and was trying to add
a photo to the Campaign class that was dependent on a User that didn’t exist.

During this process, I was also introduced to the concept of `.jbuilder` files.
I was already using a serializer for my API, but I also learned how to serialize
and render the API using this file type.

#### 3. Dynamic Progress Bar

![](https://cdn-images-1.medium.com/max/1600/1*cB5aGf2vuBFoCL5cikS6ug.png)
<span class="figcaption_hack">Dynamic progress bar in action</span>

This was definitely the simplest solution of the three, but I was happy to have
figured it out, nonetheless. My instructor, [Kevin
McAlear,](http://kevinmcalear.com/) got me started on the right track by showing
me the power of custom methods and serialization in Rails. He calmly listened to
me describe how I was going to add an extra column to my schema, do multiple
fetch requests to multiple classes, and do a bunch of unnecessary logic in the
front end before setting me straight. Below are images of my Campaign class and
its serializer.

![](https://cdn-images-1.medium.com/max/400/1*NcjCCSkqUn3fL9tznf1AeQ.png)

![](https://cdn-images-1.medium.com/max/2000/1*uMJCOIuwuNazV-Gm_0IS4Q.png)
<span class="figcaption_hack">Left: Campaign.rb || Right: CampaignSerializer.rb</span>

These custom methods enabled me to store much more data in the campaign part of
my API, and thus streamlined the process of calculating the progress of each
campaign. My custom method `percent_complete` divides the current dollar amount
of total donations to a campaign to the goal amount, multiplies it by 100, and
adds it to my API through the serializer. I am then using this number as a
percentage to set the width of the progress bar.

### What’s Next?

My next big milestone is to securely process donor payments and have the money
sent to the right campaign. My plan is to use the Stripe API, as I’ve heard that
it is fairly straightforward to work with. Hopefully, by my next blog post, I
will have this figured out and can let you know how that went. Thank you for
reading my blog, and I hope that it was interesting and/or informative!

[Access Health Development Blog
#2](https://medium.com/@angelospmusic/access-health-development-blog-2-3f463471e7a1)

* [Rails](https://medium.com/tag/rails?source=post)
* [React](https://medium.com/tag/react?source=post)
* [Redux](https://medium.com/tag/redux?source=post)
* [Healthcare](https://medium.com/tag/healthcare?source=post)
* [AWS](https://medium.com/tag/aws?source=post)
