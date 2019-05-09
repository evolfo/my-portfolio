
# Access Health Development Blog #3

Fireworks!

[Part 1](https://medium.com/@angelospmusic/access-health-development-blog-1-81257ecf4bb3) || [Part 2](https://medium.com/@angelospmusic/access-health-development-blog-2-3f463471e7a1)

The past two days have been productive at Access Health! Wednesday was spent cleaning up a lot of code, adding some comments, doing some styling, and improving the user experience of the site. One such improvement is the addition of a loading animation that plays when submitting either a donation or creating a campaign while waiting for a response.

On Thursday I implemented sorting on the browse campaigns page, you can now sort campaigns the ones closest to being funded, the newest campaigns, and the campaigns that are ending the soonest. I spent way too long working through the logic of sorting by date and converting the date string from my database into a Javascript Date instance and after finally figuring out was informed by my peer that Moment.js exists. So tomorrow I will look into refactoring with that library.

![Whoops](https://cdn-images-1.medium.com/max/3024/1*Csj_9gebD0EzD4nZU7ujBg.png)*Whoops*

I also implemented a functioning search bar that allows the user to search by the name of the campaign. When they click on an item it takes them to that campaign’s page.

![Sorting and the search bar now work!](https://cdn-images-1.medium.com/max/4728/1*4X1jTlsmk47uD-E2OIYEZQ.png)*Sorting and the search bar now work!*

The autocomplete feature was a learning experience as it was the first time I have implemented something of the sort in a search bar. I used the [React Autosuggest](https://github.com/moroshko/react-autosuggest) component by [Misha Moroshko](https://github.com/moroshko) to do this.

I also started to work on handling what should happen when a campaign is fully funded. I added a boolean column to the campaign table that is false by default and changes to true if the campaign reaches its funding goal.

![In donation.rb](https://cdn-images-1.medium.com/max/2000/1*07cW_DJ-aL18xGj_btEkUw.png)*In donation.rb*

I am using this new column to conditionally render the browse campaigns page, if a campaign reaches its goal then it will no longer show up for users looking to donate.

After this I decided to have a little bit of fun and added some CSS fireworks to the campaign page if it is successful that is only visible to the owner of the campaign. For this I headed over to Codepen and used an awesome [pen by Eddie Lin](https://codepen.io/yshlin/pen/ylDEk). You can see the fireworks in action in the gif at the top of this article!

### Next Up

I still need to add more logic to deal with a campaign ending. Right now I am not handling the case for if a campaign fails to reach its goal within its 30 day time frame. I also haven’t gotten to Action Mailer yet, I figured that I’d handle the front end side of dealing with a campaign finishing before getting to that. I am to get started with it tomorrow. I also have enjoyed my time styling the site (except when my stubborn footer wouldn’t stick to the bottom of the profile page), I will spend more time improving the look and feel of it.

That’s all for now, part 4 will be hopefully be posted soon!
