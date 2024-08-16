<template>
    <v-container>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
                <v-card class="elevation-12">
                    <v-toolbar dark color="purple">
                        <v-toolbar-title>Login to your account</v-toolbar-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-form>
                            <v-text-field
                                prepend-icon="mdi-account-box"
                                name="login"
                                label="Login"
                                id="login"
                                type="text"
                            ></v-text-field>
                            <v-text-field
                                prepend-icon="lock"
                                name="password"
                                label="Password"
                                id="password"
                                type="password"
                            ></v-text-field>
                            <button>login</button>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn dark color="pink">Login</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<!-- <template>
    <v-toolbar color="grey-lighten-3" title="Application">
      <v-btn stacked>
        <v-badge
          color="error"
          dot
        >
          <v-icon icon="mdi-newspaper-variant-outline"></v-icon>
        </v-badge>
  
        News
      </v-btn>
  
      <v-btn stacked>
        <v-badge
          color="error"
          dot
        >
          <v-icon icon="mdi-post"></v-icon>
        </v-badge>
  
        Blog
      </v-btn>
  
      <v-btn
        variant="tonal"
        stacked
      >
        <v-icon icon="mdi-login"></v-icon>
  
        Login
      </v-btn>
    </v-toolbar>
  </template> -->