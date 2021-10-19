<h2 align=center>  How to start contributing? 🏗 </h2> 

<h4> To start contributing you need to follow the below steps in proper order (should not skip a single one). </h3>

<br>
**0.**  Create your own issue or choose one already mentioned in under issues section.

Then:

**1.**  Fork [this](https://github.com/Rajeet10/Teenflix.git) repo.

**2.**  Clone your fork copy of the project which'll be visible in your account.

```
git clone --depth 1 https://github.com/<your_user_name>/Teenflix.git
```

**3.** Navigate to the project directory :file_folder: .

```
cd Blood-Buddy
```

**4.** Add a remote upstream to the original repository.

```
git remote add upstream https://github.com/Rajeet10/Teenflix.git
```

**5.** Check the remotes for the repository.

```
git remote -v
```

**6.** It is always advised to take a pull from the upstream repository to your master branch to keep it even with the main project(updated repository).

```
git pull upstream master(or main)
```

**7.** Create a new branch.

```
git checkout -b <your_branch_name>
```

**8.** Perform your desired changes to the code base.

<p align="center"><img width=35% src="https://media.giphy.com/media/oMHPlvpTvnXGPS7GhX/giphy.gif"></p>

**9.** Track your changes:heavy_check_mark: .

```
git add . 
```

**10.** Commit your changes .

```
git commit -m "Message related to changes you made in the code"
```

**11.** Push the committed changes in your feature branch to your remote repo.

```
git push -u origin <your_branch_name>
```

**12.** To create a pull request, click on `compare and pull requests`. Please ensure that both the branches are even in order to avoid merge conficts

**13.** Add a title and description to your PR explaining the features you added.

**14.** Click on `Create Pull Request`.

**15.** Congrats !! You made your first PR 🥳.

<p align="center"><img width=35% src="https://media.giphy.com/media/TdfyKrN7HGTIY/giphy.gif"></p>
<hr>

 ✨This project and everyone participating in it is governed by **[Code Of Conduct](https://github.com/Bikramjit21/Teenflix/blob/5bfb13cfb95505ec261f28102f2984b33db38560/contributors.md)** .By participating, you are expected to uphold this code.✨
