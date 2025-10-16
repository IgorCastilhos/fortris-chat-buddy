const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Simplifying digital assets
            </h1>
            <p className="text-xl text-muted-foreground">
              Confidently manage your financial operations
            </p>
          </div>

          {/* Right Column - Dashboard Mockup */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-card to-card/80 rounded-2xl p-8 shadow-2xl border border-border backdrop-blur">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-primary rounded"></div>
                  <span className="text-sm font-semibold">Dashboard</span>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                  <div className="w-3 h-3 rounded-full bg-muted"></div>
                </div>
              </div>

              {/* Chart Visualization */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Analytics</span>
                  <span className="text-sm font-semibold">$125,490</span>
                </div>
                <div className="h-32 bg-muted/20 rounded-lg flex items-end justify-around p-4 gap-2">
                  <div className="w-full h-[40%] bg-primary/60 rounded-t"></div>
                  <div className="w-full h-[70%] bg-primary/80 rounded-t"></div>
                  <div className="w-full h-[55%] bg-primary/60 rounded-t"></div>
                  <div className="w-full h-[85%] bg-primary rounded-t"></div>
                  <div className="w-full h-[60%] bg-primary/70 rounded-t"></div>
                </div>
              </div>

              {/* Transaction Card */}
              <div className="bg-background/50 rounded-xl p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-semibold">Recent Activity</span>
                  <span className="text-xs text-primary">View all</span>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Bitcoin Transfer</span>
                    <span className="text-foreground font-medium">+$5,100</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">USDC Payment</span>
                    <span className="text-foreground font-medium">-$2,450</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-4 shadow-xl w-48">
              <div className="text-xs text-muted-foreground mb-1">Send order</div>
              <div className="text-sm font-semibold mb-2">0.00985 BTC</div>
              <div className="text-xs text-muted-foreground">≈ $5,100.00 USD</div>
              <div className="mt-3 h-1 bg-muted rounded-full overflow-hidden">
                <div className="h-full w-3/4 bg-primary rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Section */}
        <div className="mt-32">
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4">
            Fortris is a platform built to fit your workflow
          </h2>
          <p className="text-center text-muted-foreground max-w-3xl mx-auto">
            Connect your back office and simply integrate digital assets into your daily operations.
            We remove the complexities and make it easy for finance teams to get started.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
